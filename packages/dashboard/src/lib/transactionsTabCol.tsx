'use client'

import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Transaction } from 'viem'


export const transactionsTabCol: ColumnDef<Transaction>[] = [
    {
        accessorKey: 'hash',
        header: 'Trx Hash'
    },
    {
        accessorKey: 'from',
        header: 'From'
    },
    {
        accessorKey: 'to',
        header: 'To'
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const trxHash = row.original?.hash || ""

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='h-8 w-8 p-0'>
                            <span className='sr-only'>Open menu</span>
                            <MoreHorizontal className='h-4 w-4' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(trxHash?.toString())}
                        >
                            Copy Trx Hash
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]
