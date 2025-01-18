---
author: G_cat [KJSPKG/HehVerse]
banner: https://kubejs.com/wiki/files/tooling/kjspkg/kjspkg.png
description: KubeJS 套件管理器
---

# KJSPKG

KJSPKG is a package manager for KubeJS that allows you to download different example scripts and libraries into your own instance.  
It will automatically manage your minecraft version, modloader, dependency and incompatibility control. It works with all modern KubeJS versions, and should even work with some older versions, ie. 1.12!

![](https://kubejs.com/wiki/files/tooling/kjspkg/kjspkg.png)

## Installation

1. Download the [CLI version of KJSPKG](https://github.com/Modern-Modpacks/kjspkg/tree/main#installation--update).
2. Open a terminal in the kubejs directory inside of your instance.
3. Run kjspkg init and select your minecraft version/modloader.

> [!tip]
> Now you are able to install packages into your instance!

## Usage

- To see more info about a package, run `kjspkg pkg <package_name>`
- To download a package, run `kjspkg install <package_name>`
- To remove a package, run `kjspkg remove <package_name>`
- To update a package, run `kjspkg update <package_name>`
- To search for a package, run `kjspkg search <query>`
- To list all packages in your instance, run `kjspkg list`
- To list all of the commands available, run `kjspkg help`

## Adding your own package

If you have an example script you would like to share on KJSPKG, check out [the "Adding your own package" section](https://github.com/Modern-Modpacks/kjspkg#adding-your-own-package) of KJSPKG's README. We are always happy to add more scripts from different authors to our list!