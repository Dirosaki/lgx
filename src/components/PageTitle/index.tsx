import { RiArrowLeftLine } from 'react-icons/ri'
import * as Styled from './styles'
import { useRouter } from 'next/navigation'

type PageTitleProps = {
  title: string
}

export function PageTitle({ title }: PageTitleProps) {
  const router = useRouter()

  const handleGoToHome = () => {
    router.push('/')
  }

  return (
    <Styled.Header>
      <button
        type="button"
        onClick={handleGoToHome}
        aria-label="Ir para a página inicial"
      >
        <RiArrowLeftLine size={24} />
      </button>
      <h1>{title}</h1>
    </Styled.Header>
  )
}
