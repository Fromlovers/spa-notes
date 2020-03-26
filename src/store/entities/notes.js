/* eslint-disable no-unused-vars */
import api from '../../db/notes';

export default {
    state: {
        notes: [],
    },
    actions: {
        addNote({ commit }, note) {
            console.log(note, 'store');

            return api.saveNote(note);
        },
        async getNotes({ commit }) {
            const notes = await api.getNotes();
            commit('setNote', notes);
        },
        deleteNote({ commit }, { note }) {
            return api.deleteBook(note);
        },
    },
    mutations: {
        setNote(state, notes) {
            state.notes = notes;
        },
    },
    getters: {},
};
