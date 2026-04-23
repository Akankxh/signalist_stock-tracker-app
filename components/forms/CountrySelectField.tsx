'use client';

import { Label } from "@/components/ui/label";
import { Controller, Control, FieldValues, Path } from "react-hook-form";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FieldError } from "react-hook-form";
import { useState } from "react";

const COUNTRIES = [
    { code: "AF", name: "Afghanistan" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AR", name: "Argentina" },
    { code: "AU", name: "Australia" },
    { code: "AT", name: "Austria" },
    { code: "BD", name: "Bangladesh" },
    { code: "BE", name: "Belgium" },
    { code: "BR", name: "Brazil" },
    { code: "CA", name: "Canada" },
    { code: "CL", name: "Chile" },
    { code: "CN", name: "China" },
    { code: "CO", name: "Colombia" },
    { code: "HR", name: "Croatia" },
    { code: "CZ", name: "Czech Republic" },
    { code: "DK", name: "Denmark" },
    { code: "EG", name: "Egypt" },
    { code: "FI", name: "Finland" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
    { code: "GH", name: "Ghana" },
    { code: "GR", name: "Greece" },
    { code: "HK", name: "Hong Kong" },
    { code: "HU", name: "Hungary" },
    { code: "IN", name: "India" },
    { code: "ID", name: "Indonesia" },
    { code: "IE", name: "Ireland" },
    { code: "IL", name: "Israel" },
    { code: "IT", name: "Italy" },
    { code: "JP", name: "Japan" },
    { code: "KE", name: "Kenya" },
    { code: "MY", name: "Malaysia" },
    { code: "MX", name: "Mexico" },
    { code: "NL", name: "Netherlands" },
    { code: "NZ", name: "New Zealand" },
    { code: "NG", name: "Nigeria" },
    { code: "NO", name: "Norway" },
    { code: "PK", name: "Pakistan" },
    { code: "PH", name: "Philippines" },
    { code: "PL", name: "Poland" },
    { code: "PT", name: "Portugal" },
    { code: "RO", name: "Romania" },
    { code: "RU", name: "Russia" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "SG", name: "Singapore" },
    { code: "ZA", name: "South Africa" },
    { code: "KR", name: "South Korea" },
    { code: "ES", name: "Spain" },
    { code: "SE", name: "Sweden" },
    { code: "CH", name: "Switzerland" },
    { code: "TW", name: "Taiwan" },
    { code: "TH", name: "Thailand" },
    { code: "TR", name: "Turkey" },
    { code: "UA", name: "Ukraine" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "GB", name: "United Kingdom" },
    { code: "US", name: "United States" },
    { code: "VN", name: "Vietnam" },
];

interface CountrySelectFieldProps<T extends FieldValues> {
    name: Path<T>;
    label?: string;
    control: Control<T>;
    error?: FieldError;
    required?: boolean;
}

const CountrySelectField = <T extends FieldValues>({
    name,
    label = "Country",
    control,
    error,
    required = false,
}: CountrySelectFieldProps<T>) => {
    const [search, setSearch] = useState("");

    const filtered = COUNTRIES.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="space-y-2">
            <Label htmlFor={name} className="form-label">{label}</Label>

            <Controller
                name={name}
                control={control}
                rules={{
                    required: required ? "Please select your country" : false,
                }}
                render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="select-trigger">
                            <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent className="bg-gray-800 border-gray-600 text-white">
                            {/* Search input pinned at the top */}
                            <div className="px-2 py-1.5 sticky top-0 bg-gray-800 z-10">
                                <input
                                    type="text"
                                    placeholder="Search country..."
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    // Prevent Select from closing or re-navigating on keydown
                                    onKeyDown={(e) => e.stopPropagation()}
                                    className="w-full rounded-md bg-gray-700 border border-gray-600 px-2 py-1 text-sm text-white placeholder:text-gray-400 outline-none focus:ring-1 focus:ring-yellow-400"
                                />
                            </div>

                            {filtered.length > 0 ? (
                                filtered.map((country) => (
                                    <SelectItem
                                        key={country.code}
                                        value={country.code}
                                        className="focus:bg-gray-600 focus:text-white"
                                    >
                                        {country.name}
                                    </SelectItem>
                                ))
                            ) : (
                                <p className="px-3 py-2 text-sm text-gray-400">No country found.</p>
                            )}
                        </SelectContent>
                    </Select>
                )}
            />

            {error && <p className="text-sm text-red-500">{error.message}</p>}
        </div>
    );
};

export default CountrySelectField;