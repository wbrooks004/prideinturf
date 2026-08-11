#!/usr/bin/env python3
"""Pride In Turf — Lawn Service Single template. Run from anywhere:
    python3 _project/builders/build_service.py
"""
import os, sys
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
from pit_common import *
exec(open(os.path.join(HERE, 'service_sections.py'), encoding='utf-8').read())
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
    "/home/user/prideinturf/_project/exports/imports/single-lawn-service.json")
