"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { currencyTypes } from "@/lib/constants";
import { DatePicker } from "@/components/date-picker";

const FormSchema = z.object({
	currencyCode: z.string({
		required_error: "Please select currency code.",
	}),
	date: z.date({
		invalid_type_error: "Please select date.",
	}),
});

export default function Home() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data);
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}>
				<FormField
					control={form.control}
					name="currencyCode"
					render={({ field }) => (
						<FormItem className="mb-4">
							<FormLabel>Currency Code</FormLabel>
							<Select onValueChange={field.onChange} defaultValue={field.value}>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Currency Code" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{currencyTypes.filter(Boolean).map((currency) => (
										<SelectItem
											key={currency as string}
											value={currency as string}
										>
											{currency as string}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="date"
					render={() => (
						<FormItem className="mb-4">
							<FormLabel>Date</FormLabel>
							<DatePicker />
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
}
