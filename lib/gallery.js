import fs from 'fs'
import path from 'path'

const galleryDirectory = path.join(process.cwd(), 'public/projects')



export function getAllProjectIds() {
    const projectIds = fs.readdirSync(galleryDirectory)
    return projectIds.map(project => {
        return {
            params: {
                proj: project
            }
        }
    })
}

export function getProjectData(proj) {
    const fullPath = path.join(galleryDirectory, proj)
    const imageCount = fs.readdirSync(fullPath).length -1
    const desc = fs.readFileSync(path.join(fullPath, 'description.txt')).toString()
    return {
        proj,
        imageCount,
        desc
    }
}

export function getThumbData() {
    const projects = Array.from(fs.readdirSync(galleryDirectory))
    const thumbs = projects.map(proj => {
        const desc = fs.readFileSync(path.join(galleryDirectory, proj, 'description.txt')).toString()
        return {
            proj,
            desc
        }
    })
    return thumbs
}