import HomeLogo from '@/ui/logo'
import SignUpForm from '@/ui/account/signup-form'

export default function LoginPage() {
	return (
		<main className="flex items-center justify-center md:h-screen">
			<div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:mt-5">
				<div className="flex items-end w-full h-20 p-3 bg-blue-500 rounded-lg">
					<HomeLogo />
				</div>
				<SignUpForm />
			</div>
		</main>
	)
}
