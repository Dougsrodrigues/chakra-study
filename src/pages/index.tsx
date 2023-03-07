import { Input } from '@/components/Form/Input'
import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
interface SignInFormData {
  email: string;
  password: string;
}

const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória')
})

export default function Home() {

  const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values)
  }

  return (
    <Flex
      height="100vh"
      width="100vw"
      align="center"
      justify="center"
    >
      <Flex
        as='form'
        width='100%'
        maxWidth={360}
        bg='gray.800'
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack
          spacing={4}
        >
          <Input
            type='email'
            label='E-mail'
            error={errors.email}
            {...register('email')}
          />
          <Input
            type='password'
            label='Password'
            error={errors.password}
            {...register('password')}
          />
        </Stack>

        <Button
          type='submit'
          mt='6'
          colorScheme='pink'
          size='lg'
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  )
}
