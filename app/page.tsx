'use client'

import { Metadata } from 'next'
import { Product, columns } from '@/components/columns'
import { DataTable } from '@/components/data.table'

import Link from 'next/link'
import {
  Home,
  LineChart,
  ListFilter,
  Package,
  Package2,
  PanelLeft,
  PlusCircle,
  Settings,
  ShoppingCart,
  Users2,
} from 'lucide-react'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import AddProductForm from '@/components/add-product-form'
import { useState } from 'react'

const dummyData = [
  {
 
    title: 'Open-Source SSD Pixel',
    description:
      "You can't compress the program without quantifying the open-source SSD pixel!",
    category: 'Electronics',
    price: '299.99',
    status: 'in stock',
   
  },
  {
   
    title: 'EXE Feed Calculator',
    description:
      'Try to calculate the EXE feed, maybe it will index the multi-byte pixel!',
    category: 'Software',
    price: '149.99',
    status: 'out of stock',
   
  },
  {
   
    title: 'Neural TCP Card',
    description: 'We need to bypass the neural TCP card!',
    category: 'Hardware',
    price: '399.99',
    status: 'out of stock',
   
  },
  {
   
    title: 'SAS Interface',
    description:
      'The SAS interface is down, bypass the open-source pixel so we can back up the PNG bandwidth!',
    category: 'Networking',
    price: '249.99',
    status: 'in stock',
  
  },
]

export const description =
  'An products dashboard with a sidebar navigation. The sidebar has icon navigation. The content area has a breadcrumb and search in the header. It displays a list of products in a table with actions.'
// export const metadata: Metadata = {
//   title: 'products',
//   description: 'A product and issue tracker build using Tanstack Table.',
// }

function Dashboard() {
  const [dialog, setDialog] = useState(false)
  const [products, setProducts] = useState<Product[]>(dummyData)
  return (
    <div className='flex min-h-screen w-full flex-col bg-muted/40'>
      <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
        <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
          <Link
            href='#'
            className='group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base'
          >
            <Package2 className='h-4 w-4 transition-all group-hover:scale-110' />
            <span className='sr-only'>Acme Inc</span>
          </Link>

          <Link
            href='#'
            className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
          >
            <Home className='h-5 w-5' />
            <span className='sr-only'>Dashboard</span>
          </Link>

          <Link
            href='#'
            className='flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
          >
            <ShoppingCart className='h-5 w-5' />
            <span className='sr-only'>Orders</span>
          </Link>

          <Link
            href='#'
            className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
          >
            <Package className='h-5 w-5' />
            <span className='sr-only'>Products</span>
          </Link>

          <Link
            href='#'
            className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
          >
            <Users2 className='h-5 w-5' />
            <span className='sr-only'>Customers</span>
          </Link>

          <Link
            href='#'
            className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
          >
            <LineChart className='h-5 w-5' />
            <span className='sr-only'>Analytics</span>
          </Link>
        </nav>
        <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
          <Link
            href='#'
            className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
          >
            <Settings className='h-5 w-5' />
            <span className='sr-only'>Settings</span>
          </Link>
        </nav>
      </aside>
      <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
        <header className='sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
          <Sheet>
            <SheetTrigger asChild>
              <Button size='icon' variant='outline' className='sm:hidden'>
                <PanelLeft className='h-5 w-5' />
                <span className='sr-only'>Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='sm:max-w-xs'>
              <nav className='grid gap-6 text-lg font-medium'>
                <Link
                  href='#'
                  className='group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base'
                >
                  <Package2 className='h-5 w-5 transition-all group-hover:scale-110' />
                  <span className='sr-only'>Acme Inc</span>
                </Link>
                <Link
                  href='#'
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                >
                  <Home className='h-5 w-5' />
                  Dashboard
                </Link>
                <Link
                  href='#'
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                >
                  <ShoppingCart className='h-5 w-5' />
                  Orders
                </Link>
                <Link
                  href='#'
                  className='flex items-center gap-4 px-2.5 text-foreground'
                >
                  <Package className='h-5 w-5' />
                  Products
                </Link>
                <Link
                  href='#'
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                >
                  <Users2 className='h-5 w-5' />
                  Customers
                </Link>
                <Link
                  href='#'
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                >
                  <LineChart className='h-5 w-5' />
                  Settings
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Breadcrumb className='hidden md:flex'>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href='#'>Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href='#'>Products</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>All Products</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <main className='grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
          <div className='flex items-center'>
            <div className='ml-auto flex items-center gap-2'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='outline' size='sm' className='h-8 gap-1'>
                    <ListFilter className='h-3.5 w-3.5' />
                    <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                      Filter
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked>
                    Active
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Dialog open={dialog} onOpenChange={setDialog}>
                <DialogTrigger asChild>
                  <Button size='sm' className='h-8 gap-1'>
                    <PlusCircle className='h-3.5 w-3.5' />
                    <span className='sr-only sm:not-sr-only sm:whitespace-nowrap'>
                      Add Product
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className='sm:max-w-[425px]'>
                  <DialogHeader>
                    <DialogTitle>Add a Product</DialogTitle>
                    <DialogDescription>
                      Make changes to your profile here. Click save when you're
                      done.
                    </DialogDescription>
                  </DialogHeader>

                  <AddProductForm
                    handleSubmit={(product) => {
                      setProducts([...products, product])
                      setDialog(false)
                    }}
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DataTable data={products} columns={columns} />
            </CardContent>
            <CardFooter>
              <div className='text-xs text-muted-foreground'>
                Showing <strong>1-10</strong> of <strong>32</strong> products
              </div>
            </CardFooter>
          </Card>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
