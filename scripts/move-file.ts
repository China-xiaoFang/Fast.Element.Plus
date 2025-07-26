import path from "path";
import { __dirname, copyFile, npmPackagePath } from "./file";

console.log(`
更新版权文件中...
`);

copyFile(path.resolve(__dirname, "../Fast.png"), npmPackagePath);
copyFile(path.resolve(__dirname, "../LICENSE"), npmPackagePath);
copyFile(path.resolve(__dirname, "../README.md"), npmPackagePath);
copyFile(path.resolve(__dirname, "../README.zh.md"), npmPackagePath);

console.log(`
更新版权文件成功...
`);

console.log(`
	更新自定义声明文件中...
	`);

copyFile(path.resolve(__dirname, "../packages"), path.join(npmPackagePath, "es"), ".d.ts");
copyFile(path.resolve(__dirname, "../packages"), path.join(npmPackagePath, "lib"), ".d.ts");

console.log(`
	更新自定义声明文件成功...
	`);

console.log(`
更新 [types] [styles] 文件中...
`);

copyFile(path.resolve(__dirname, "../styles"), path.resolve(npmPackagePath, "styles"));
copyFile(path.resolve(__dirname, "../types"), path.resolve(npmPackagePath, "types"));
copyFile(path.resolve(__dirname, "../global.d.ts"), npmPackagePath);

console.log(`
更新 [types] [styles] 文件成功...
`);
