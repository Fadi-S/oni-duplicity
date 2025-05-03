import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMaterialList } from "@/services/oni-save/hooks/useMaterials";
import DeleteLooseButton from "./DeleteLooseButton";
import React from "react";

export interface MaterialsPageProps {
  className?: string;
}

const MaterialsTable = ({ className }: MaterialsPageProps) => {
  const { t } = useTranslation();
  const materials = useMaterialList();
  const [search, setSearch] = useState("");

  const onSearchChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value.toLowerCase());
      },
      []
  );

  const formatWeight = (weight: number) => {
    if (Math.abs(weight) < 1000) {
      const g = Number(weight.toFixed(2));
      return t("material.gram", { count: g });
    }
    const kg = Number((weight / 1000.0).toFixed(2));
    return t("material.kilogram", { count: kg });
  };

  const displayMaterials = materials.filter(
      x => search === "" || x.name.toLowerCase().includes(search)
  );

  return (
      <div className={className}>
        <div className="m-4">
          <input
              type="text"
              placeholder={t("search")}
              onChange={onSearchChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("material.noun_titlecase")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <DeleteLooseButton />
                {t("material_loose.noun_titlecase")}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t("material_storage.noun_titlecase")}
              </th>
            </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {displayMaterials.map(
                ({ name, looseGrams, looseCount, storedGrams, storedCount }) => (
                    <tr key={name} className="h-16 hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {looseGrams > 0 && (
                            <div className="flex items-center gap-2">
                              <DeleteLooseButton materialType={name} />
                              <span>
                          {formatWeight(looseGrams)} | {t("material_loose.clump_count", { count: looseCount })}
                        </span>
                            </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {storedGrams > 0 && (
                            <span>
                        {formatWeight(storedGrams)} | {t("material_storage.container_count", {
                              count: storedCount
                            })}
                      </span>
                        )}
                      </td>
                    </tr>
                )
            )}
            </tbody>
          </table>
        </div>
      </div>
  );
};

export default MaterialsTable;