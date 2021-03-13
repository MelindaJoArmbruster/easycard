import axios from 'axios'

//ACTION TYPES
const FETCH_TEMPLATES = 'FETCH_TEMPLATES'
const TEMPLATES_LOADING = 'TEMPLATES_LOADING'
const TEMPLATES_SUCCESS = 'TEMPLATES_SUCCESS'

//ACTION CREATORS:
export const _fetchTemplates = templates => {
  return {
    type: FETCH_TEMPLATES,
    templates
  }
}

export const _templatesLoading = () => {
  return {
    type: TEMPLATES_LOADING
  }
}

export const _templatesSuccess = () => {
  return {
    type: TEMPLATES_SUCCESS
  }
}

//THUNKS
export const fetchTemplates = () => {
  return async dispatch => {
    await dispatch(_templatesLoading())
    const templates = (await axios.get('/api/templates')).data
    await dispatch(_fetchTemplates(templates))
    dispatch(_templatesSuccess())
  }
}

const initialState = {
  templates: [],
  loading: false
}

const templatesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEMPLATES:
      return {...state, templates: [...action.templates]}
    case TEMPLATES_LOADING:
      return {...state, loading: true}
    case TEMPLATES_SUCCESS:
      return {...state, loading: false}
    default:
      return state
  }
}

export default templatesReducer
