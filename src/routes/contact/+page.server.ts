import type { Actions, PageServerLoad } from './$types.js';
import { superValidate, message } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { z } from 'zod';

const schema = z.object({
	sede: z.enum(['', 'CENTRAL', 'MARTIRES', 'ELENA LARA'], 
		{ message: 'Seleccione una sede' }).refine(sede => sede !== '', 
			{ message: 'Seleccione una sede' }),
	name: z.string().min(2, 'Escriba bieb'),
	email: z.string().email()
});


export const load: PageServerLoad = async () => {
	return { form: await superValidate(zod(schema)) };
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(schema));
		console.log(form);

		if (!form.valid) return fail(400, { form });

		return message(form, 'Form posted successfully!');
	}
};
