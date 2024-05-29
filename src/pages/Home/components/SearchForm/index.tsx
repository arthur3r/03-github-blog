import { SearchFormContainer, SearchFormInput } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div className="publications">
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </div>
      <form>
        <SearchFormInput type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchFormContainer>
  )
}
