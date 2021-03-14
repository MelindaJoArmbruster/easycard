import React from 'react'
import history from '../history'

const GoogleSuccess = () => {
  const localTemplateId = localStorage.getItem('templateId')
  localTemplateId
    ? history.push(`/templates/${localTemplateId}`)
    : history.push('/templates')

  return <div>Loading...</div>
}

export default GoogleSuccess
