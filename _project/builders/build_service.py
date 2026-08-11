#!/usr/bin/env python3
from pit_common import *
exec(open('service_sections.py', encoding='utf-8').read())
emit({
    "name": "pit-single-lawn-service",
    "title": "PIT — Single: Lawn Service",
    "type": "single",
    "content": NODES,
    "pageSettings": {},
    "templateSettings": {
        "templateConditions": [{"main": "postType", "postType": ["lawn-services"]}],
        "templatePreviewType": "single",
        "templatePreviewPostType": "lawn-services"},
    "global_classes": list(CLASSES.values()),
    "globalVariables": [],
    "globalVariablesCategories": []},
    "/home/user/prideinturf/bricks-json/single-lawn-service.json")
