'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/dist/server/api-utils'

export async function signUp(
	prevState: string | undefined,
	formData: FormData,
) {
	try {
		return 'yet'
	} catch (error) {
		return 'error'
	}
}
