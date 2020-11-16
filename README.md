<!-- 初始化 -->
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev

<!-- git上传忽略node_modules -->
1、在需要创建 .gitignore 文件的文件夹, 右键选择Git Bash 进入命令行，进入项目所在目录。
2、输入 touch .gitignore ，生成“.gitignore”文件。
3、在”.gitignore” 文件里输入你要忽略的文件夹及其文件就可以了。（注意格式）
例如：
node_modules/
dist/