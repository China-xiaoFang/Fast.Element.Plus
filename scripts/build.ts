import path from "path";
import { __dirname, deleteFile, npmPackagePath } from "./file";

const deleteFiles = [
	path.join(npmPackagePath, "Fast.png"),
	path.join(npmPackagePath, "LICENSE"),
	path.join(npmPackagePath, "README.md"),
	path.join(npmPackagePath, "README.zh.md"),
	path.join(npmPackagePath, "dist"),
	path.join(npmPackagePath, "es"),
	path.join(npmPackagePath, "lib"),
	path.join(npmPackagePath, "styles"),
	path.join(npmPackagePath, "types"),
	path.join(npmPackagePath, "global.d.ts"),
];

console.log(`
  清理文件中...
  `);

deleteFiles.forEach((pItem) => {
	deleteFile(path.resolve(__dirname, pItem));
});

console.log(`
  清理文件成功...
  `);
