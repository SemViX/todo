export interface ITaskBlockProps{
    documentId: string,
    title: string,
    text: any,
    deadline: string,
    is_completed: boolean,
    photo: {
        url: string
    }
}