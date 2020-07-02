/* eslint-disable no-unused-vars */
import model from '../../db/notes';

export default {
    state: {
        notes: [],
    },
    actions: {
        addNote({ commit }, note) {
            console.log(note, 'store');

            return model.saveNote(note);
        },
        async getNotes({ commit }) {
            const notes = await model.getNotes();
            commit('setNote', notes);
        },
        deleteNote({ commit }, { note }) {
            return model.deleteNote(note);
        },
    },
    mutations: {
        setNote(state, notes) {
            state.notes = notes;
        },
    },
    getters: {},
};
