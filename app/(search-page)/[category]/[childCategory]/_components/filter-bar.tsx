"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  breedSizeFilters,
  colorFilters,
  genderFilters,
} from "@/constants/filters";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  genders: z.array(z.string()),
  colors: z.array(z.string()),
  breedSizes: z.array(z.string()),
  minPrice: z.number().optional(),
  maxPrice: z.number().optional(),
});

const FilterBar = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      genders: [],
      colors: [],
      breedSizes: [],
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="w-[280px]">
      <h2 className="text-2xl font-bold text-primary">Filter</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-2">
          <div className="grid grid-cols-1 space-y-4 divide-y">
            <FormField
              control={form.control}
              name="genders"
              render={() => (
                <FormItem>
                  <div>
                    <FormLabel className="text-base font-bold">
                      Gender
                    </FormLabel>
                  </div>
                  {genderFilters.map((gender) => (
                    <FormField
                      key={gender.id}
                      control={form.control}
                      name="genders"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(gender.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, gender.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== gender.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-medium">
                            {gender.label}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="colors"
              render={() => (
                <FormItem className="pt-4">
                  <div>
                    <FormLabel className="text-base font-bold">Color</FormLabel>
                  </div>
                  {colorFilters.map((color) => (
                    <FormField
                      key={color.id}
                      control={form.control}
                      name="colors"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(color.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, color.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== color.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="inline-flex text-sm font-medium">
                            <Image
                              src={color.icon}
                              alt={color.label}
                              width={15}
                              height={15}
                            />
                            <span className="ml-2">{color.label}</span>
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </FormItem>
              )}
            />

            <FormItem className="pt-4">
              <div>
                <FormLabel className="text-base font-bold">Price</FormLabel>
              </div>
              <div className="inline-flex gap-3">
                <FormField
                  control={form.control}
                  name="minPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="number" min={0} placeholder="Min" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="maxPrice"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type="number" min={1} placeholder="Max" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </FormItem>

            <FormField
              control={form.control}
              name="breedSizes"
              render={() => (
                <FormItem className="pt-4">
                  <div>
                    <FormLabel className="text-base font-bold">Breed</FormLabel>
                  </div>
                  {breedSizeFilters.map((size) => (
                    <FormField
                      key={size.id}
                      control={form.control}
                      name="breedSizes"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(size.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, size.id])
                                  : field.onChange(
                                      field.value?.filter(
                                        (value) => value !== size.id,
                                      ),
                                    );
                              }}
                            />
                          </FormControl>
                          <FormLabel className="text-sm font-medium">
                            {size.label}
                          </FormLabel>
                        </FormItem>
                      )}
                    />
                  ))}
                </FormItem>
              )}
            />
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FilterBar;
