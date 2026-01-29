import Note from "../models/Note.js"


export const getAllNotes = async (_, res) => {
    try {
        const notes = await Note.find().sort({createdAt: -1}); // newest first
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in getAllNotes controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const getNoteById = async (req, res) => {
    try {
        const findNotes = await Note.findById(req.params.id);
        if(!findNotes) return res.status(404).json({message: "Note not found."})
        res.status(200).json(findNotes)
    } catch (error) {
        console.error("Error in getNoteById controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const createNotes = async (req, res) => {
    try {
        const { title, content } = req.body
        const newNote =  new Note({title, content})

        const savedNote = await newNote.save()
        res.status(201).json(savedNote) 
    } catch (error) {
        console.error("Error in creatNotes controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const updateNotes = async (req, res) => {
    try {
        const { title, content} = req.body
        const updatedNotes = await Note.findByIdAndUpdate(req.params.id, {title, content}, {
            new: true,  
        })
        if(!updatedNotes) return res.status(404).json({message: "Note not found."})
        res.status(200).json(updatedNotes)
    } catch (error) {
        console.error("Error in updateNotes controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const deleteNotes = async (req, res) => {
    try {
        const deletedNotes = await Note.findByIdAndDelete(req.params.id)
        if(!deletedNotes) return res.status(404).json({message: "This id is'nt sufficient."})
        res.status(200).json({message: "Note deleted successfully."})
    } catch (error) {
        console.error("Error in deleteNotes controller", error)
        res.status(500).json({message: "Internal server error"})
    }
}