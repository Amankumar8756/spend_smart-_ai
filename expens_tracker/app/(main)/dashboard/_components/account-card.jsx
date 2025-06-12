"use client";

import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { toast } from "sonner";
import useFetch from "@/hooks/use-fetch";
import { updateDefaultAccount } from "@/actions/account";
import { useEffect } from "react";

export function AccountCard({ account }) {
  const { name, type, balance, id, isDefault } = account;

  const { loading, fn: updateFn, data, error } = useFetch(updateDefaultAccount);

  const handleSwitch = async (e) => {
    e.preventDefault();
    if (isDefault) return toast.warning("You need at least 1 default account");
    await updateFn(id);
  };

  useEffect(() => {
    if (data?.success) toast.success("Default account updated");
  }, [data]);

  useEffect(() => {
    if (error) toast.error("Update failed");
  }, [error]);

  return (
    <Card className="hover:shadow-md transition-shadow group relative">
      <Link href={`/account/${id}`}>
        <CardHeader className="flex items-center justify-between">
          <CardTitle className="text-sm capitalize">{name}</CardTitle>
          <Switch
            checked={isDefault}
            onClick={handleSwitch}
            disabled={loading}
          />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            ${parseFloat(balance).toFixed(2)}
          </div>
          <p className="text-xs text-muted-foreground">
            {type.charAt(0) + type.slice(1).toLowerCase()} Account
          </p>
        </CardContent>
        <CardFooter className="flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center">
            <ArrowUpRight className="h-4 w-4 mr-1 text-green-500" />
            Income
          </div>
          <div className="flex items-center">
            <ArrowDownRight className="h-4 w-4 mr-1 text-red-500" />
            Expense
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
