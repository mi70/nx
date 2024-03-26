# Nx for vue

## Node

v20.9.0

## Structure

### apps

Project 

### libs/components

Shared components

### libs/stores

Shared pinia stores

### libs/utils

Shared utils

### libs/api

Shared api

### libs/locales

Shared locales

### libs/models

Shared models

### libs/scss

Shared scss

## Instructions

Add new public plug-in

```
npm add <target>
```

Add new shared items

```
npx nx g @nx/vue:library libs/<target>
```

Add new project

```
npx nx g @nx/vue:application <project>
```

Project command

```
npx nx run <project>:<option> 
```
