import axios from 'axios'

//ACTION TYPES
const FETCH_SINGLE_TEMPLATE = 'FETCH_SINGLE_TEMPLATE'
const SINGLE_TEMPLATE_LOADING = 'SINGLE_TEMPLATE_LOADING'
const SINGLE_TEMPLATE_SUCCESS = 'SINGLE_TEMPLATE_SUCCESS'

//ACTION CREATORS:
export const _fetchSingleTemplate = singleTemplate => {
  return {
    type: FETCH_SINGLE_TEMPLATE,
    singleTemplate
  }
}

export const _singleTemplateLoading = () => {
  return {
    type: SINGLE_TEMPLATE_LOADING
  }
}

export const _singleTemplateSuccess = () => {
  return {
    type: SINGLE_TEMPLATE_SUCCESS
  }
}

//THUNKS
export const fetchSingleTemplate = templateId => {
  return async dispatch => {
    try {
      await dispatch(_singleTemplateLoading())
      const template = (await axios.get(`/api/templates/${templateId}`)).data
      localStorage.setItem('templateId', templateId)
      await dispatch(_fetchSingleTemplate(template))
      dispatch(_singleTemplateSuccess())
    } catch (err) {
      console.log(err)
    }
  }
}

const initialState = {
  singleTemplate: {},
  loading: false
}

//TEMPLATE REDUCER
const singleTemplateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SINGLE_TEMPLATE:
      return {...state, singleTemplate: action.singleTemplate}
    case SINGLE_TEMPLATE_LOADING:
      return {...state, loading: true}
    case SINGLE_TEMPLATE_SUCCESS:
      return {...state, loading: false}
    default:
      return state
  }
}

export default singleTemplateReducer
