/* eslint-disable no-unused-vars */
import model from '../../db/notes';

export default {
    state: {
        notes: {},
    },
    actions: {
        async addNote({ commit }, note) {
            model.saveNote(note);
            const notes = await model.getNotes();
            commit('setNote', notes);
        },
        async setStateNotes({ commit }) {
            const notes = await model.getNotes();
            commit('setNote', notes);
        },
        async deleteNote({ commit }, id) {
            await model.deleteNote(id);
            const notes = await model.getNotes();
            commit('setNote', notes);
        },
        async updateNote({ commit }, note) {
            await model.updateNote(note);
            const notes = await model.getNotes();
            commit('setNote', notes);
        },
    },
    mutations: {
        setNote(state, notes) {
            state.notes = notes;
        },
    },
    getters: {
        getNoteById(state, id) {
            return id => state.notes.find(note => note.id === id);
        },
    },
};
