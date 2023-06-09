import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), 'posts');


export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data
        }
    });

    return allPostData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    })
};

export function getAllPostsIds() {
    const fileNames = fs.readdirSync(postsDirectory);

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/.md$/, '')
            }
        }
    });
}