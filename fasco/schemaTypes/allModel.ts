import {defineField, defineType} from 'sanity'

export const allModel = defineType({
  name: 'clothing',
  title: 'Clothing',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
  
})
