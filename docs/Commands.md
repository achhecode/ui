Creating the APP using Bun:

```sh
bun create next-app@latest my-app
```


Adding the projects to git:

```sh
```

```sh
git init
git add .
git commit -m "Intial Commit"
git remote add origin git@github-ac:achhecode/ui.git
git branch -M main
git push -u origin main
```


Adding support for Shadcn/UI:

```sh
bunx --bun shadcn@latest init
```

Add shadcn/ui component:

```sh
bunx --bun shadcn@latest add button input
bunx --bun shadcn@latest add input-group
```

Adding internationalization(i18n) support:
 
```sh
bun install next-intl
```
