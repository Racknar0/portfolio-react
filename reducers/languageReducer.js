import { SET_LANG_ES, SET_LANG_EN } from "@/types/loaderActions";
import es from '@/translations/es.js';
import en from '@/translations/en.js';

const initialState = {
    lang: en,
};

export function languageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_LANG_ES:
            return {
                ...state,
                lang: es
            };
        case SET_LANG_EN:
            return {
                ...state,
                lang: en
            };
        default:
            return state;
    }
}