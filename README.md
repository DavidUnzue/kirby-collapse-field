# kirby-collapse-field
This is an extension for the Kirby 2 CMS (http://getkirby.com/).It provides a `collapse` field for the Panel, which groups all the following content until next 'collapse' field into a collapsible block.

This is based on [ljacobs-sml](https://github.com/ljacobs-sml)'s [kirby-accordionHeadlineField](https://github.com/ljacobs-sml/kirby-accordionHeadlineField), which replaces the default 'headline' field. I created my own field because I wanted to preserve the default 'headline' field while being able to collapse content using a separate field type.

## Installation

### Git submodule (recommended)
You can install kirby-collapse-field from the command line as a Git submodule if you are running Kirby under Git version control (see [Working with Git](http://getkirby.com/blog/working-with-git)).
From within your Kirby-project's root directory, execute the following command:
```
git submodule add https://github.com/DavidUnzue/kirby-collapse-field.git site/fields/collapse
```
It is essential, that the directory under 'site/fields/' the files are placed in is named 'collapse'.

### Download
You can download the latest version of kirby-collapse-field [here](https://github.com/DavidUnzue/kirby-collapse-field/archive/master.zip). Just unzip the files into 'site/fields/collapse' (if some of these directories doesn't exist in your Kirby project, create them manually).

## Usage
Within your Panel's blueprint, add a field with type 'collapse' like this:
```
...
header_settings:
  label: Header settings
  type: collapse
...
```
All other fields following this until next 'collapse' field or the end of the field's list will be collapsed into a block.

![Collapse field](http://vgy.me/x28OgL.gif)
