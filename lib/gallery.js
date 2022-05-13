import fs from 'fs'
import path from 'path'
import imageSize from 'image-size'

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
    const imageCount = fs.readdirSync(fullPath).length -2
    const desc = fs.readFileSync(path.join(fullPath, 'description.txt')).toString()

    const imgDimensions = {}
    for (let i=1;i<imageCount+1;i++) {
        const imgName = `img-${i}.jpg`
        const imgPath = path.join(galleryDirectory, proj, imgName)
        const {height, width} = imageSize(fs.readFileSync(imgPath))

        imgDimensions[imgName] = {height, width}
    }
    return {
        proj,
        imgDimensions,
        desc
    }
}

export function getThumbData() {
    const projects = Array.from(fs.readdirSync(galleryDirectory))
    const thumbs = projects.map(proj => {
        const desc = fs.readFileSync(path.join(galleryDirectory, proj, 'description.txt')).toString()
        const thumbPath = path.join('/projects/', proj, 'thumb.jpg')
        return {
            proj,
            desc,
            thumbPath
        }
    })
    return thumbs
}