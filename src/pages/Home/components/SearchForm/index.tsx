import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchFormContainer, SearchFormInput } from './styles'
import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../../../contexts/IssuesContext'

const SearchFormSchema = z.object({
  query: z.string(),
})

type SearchFormProps = z.infer<typeof SearchFormSchema>

export function SearchForm() {
  const { register, handleSubmit } = useForm<SearchFormProps>({
    resolver: zodResolver(SearchFormSchema),
  })

  const { issues, fetchIssues } = useContextSelector(
    IssuesContext,
    (context) => {
      return {
        issues: context.issues,
        fetchIssues: context.fetchIssues,
      }
    },
  )

  async function handleSearchFormSubmit(data: SearchFormProps) {
    await fetchIssues(data.query)
  }

  return (
    <SearchFormContainer>
      <div className="publications">
        <h3>Publicações</h3>
        <span>{issues.length} publicações</span>
      </div>

      <form action="" onSubmit={handleSubmit(handleSearchFormSubmit)}>
        <SearchFormInput
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </SearchFormContainer>
  )
}
