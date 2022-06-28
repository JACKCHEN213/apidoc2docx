# -*- coding: utf-8 -*-
import os
import json
from argparse import ArgumentParser
from typing import Union, List, Dict
from docx import Document
from tqdm import trange

from common import Project, Item, Group


def get_params() -> (str, str):
    parser = ArgumentParser(description='apidoc to pdf')
    parser.add_argument("-p", "--project", type=str, required=True)
    parser.add_argument("-d", "--data", type=str, required=True)
    parser.add_argument("-o", "--output", type=str, default="./")

    arguments = parser.parse_args()
    if not os.path.isfile(arguments.project):
        raise Exception(f'项目文件{arguments.project}不存在')
    if not os.path.isfile(arguments.data):
        raise Exception(f'数据文件{arguments.data}不存在')
    return arguments.project, arguments.data, arguments.output


def get_json_from_file(file_name) -> Union[List, Dict]:
    with open(file_name, 'r') as fp:
        return json.load(fp)


def parse_project(project_file) -> Project:
    project_data = get_json_from_file(project_file)
    return Project(**project_data)


def parse_data(data_file) -> List[Group]:
    groups = {}
    for data in get_json_from_file(data_file):
        item = Item(**data)
        if item.group in groups.keys():
            groups[item.group].items.append(item)
        else:
            groups[item.group] = Group(name=item.group, items=[item])
    return list(groups.values())


def write_to_docx(project: Project, groups: List[Group], output: str):
    document = Document()

    project.write_to_docx(document)
    for i in trange(len(groups)):
        groups[i].write_to_docs(document, project)

    if not os.path.isdir(output):
        os.mkdir(output)
    if os.path.isfile(project.excel_name(output)):
        os.remove(project.excel_name(output))
    document.save(project.excel_name(output))


def main():
    project_file, data_file, output = get_params()
    project = parse_project(project_file)
    groups = parse_data(data_file)
    write_to_docx(project, groups, output)


if __name__ == '__main__':
    main()
