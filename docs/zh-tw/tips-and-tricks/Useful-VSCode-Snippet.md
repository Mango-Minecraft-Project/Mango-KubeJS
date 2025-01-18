---
isOriginal: true
category:
  - 小技巧
tag:
  - VSCode
  - 自動補全
---

# 自製 KubeJS 用 VSCode Code Snippet

```json
{
  "event": {
    "scope": "javascript,typescript",
    "prefix": "$event",
    "body": ["(event) => {", "  $0", "}"]
  },
  "priority": {
    "scope": "javascript,typescript",
    "prefix": "$priority",
    "body": ["// priority: $1", "$0"]
  },
  "ignored": {
    "scope": "javascript,typescript",
    "prefix": "$ignored",
    "body": ["// ignored: ${1|true,false|}", "$0"]
  },
  "packmode": {
    "scope": "javascript,typescript",
    "prefix": "$packmode",
    "body": ["// packmode: $1", "$0"]
  },
  "requires": {
    "scope": "javascript,typescript",
    "prefix": "$requires",
    "body": ["// requires: $1", "$0"]
  },
  "todo": {
    "scope": "javascript,typescript",
    "prefix": "$todo",
    "body": ["// TODO", "$0"]
  },
  "license": {
    "scope": "javascript,typescript",
    "prefix": "$license",
    "body": ["/**", " * @author MangoJellyPudding", " */", "", ""]
  },
  "disable ts-except-error": {
    "scope": "typescript",
    "prefix": "$disable-ts-except-error",
    "body": ["// @ts-expect-error", "$0"]
  }
}
```