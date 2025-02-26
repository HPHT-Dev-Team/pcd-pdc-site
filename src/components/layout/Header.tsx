'use client';

import React, { useState, Fragment, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Dialog, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { mainNavigation } from '@/config/navigation';
import type { NavigationItem } from '@/types';
import { usePathname } from 'next/navigation';
import imageLoader from '@/utils/image-loader';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

function hasItems(item: NavigationItem): item is NavigationItem & { items: NavigationItem[] } {
  return Array.isArray(item.items) && item.items.length > 0;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const renderNavigationItem = (item: NavigationItem) => {
    if (hasItems(item)) {
      return (
        <Popover key={item.name} className="relative">
          {({ open, close }) => (
            <>
              <Popover.Button
                className={`flex items-center gap-x-1 text-sm font-semibold leading-6 outline-none ${
                  pathname.startsWith(item.href) ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                {item.name}
                <ChevronDownIcon className={`h-5 w-5 flex-none text-gray-400 ${open ? 'rotate-180' : ''} transition-transform`} aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute left-0 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {item.items.map((subItem) => (
                      <div key={subItem.name} className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                        <div className="flex-auto">
                          <Link 
                            href={subItem.href} 
                            className={`block font-semibold ${
                              pathname === subItem.href ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                            }`}
                            onClick={() => close()}
                          >
                            {subItem.name}
                            <span className="absolute inset-0" />
                          </Link>
                          {hasItems(subItem) && (
                            <div className="mt-1 text-gray-600">
                              {subItem.items.map((subSubItem) => (
                                <Link
                                  key={subSubItem.name}
                                  href={subSubItem.href}
                                  className={`block py-1 ${
                                    pathname === subSubItem.href ? 'text-blue-600' : 'hover:text-blue-600'
                                  }`}
                                  onClick={() => close()}
                                >
                                  {subSubItem.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      );
    }

    return (
      <Link
        key={item.name}
        href={item.href}
        className={`text-sm font-semibold leading-6 ${
          pathname === item.href ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
        }`}
      >
        {item.name}
      </Link>
    );
  };

  const renderMobileNavigationItem = (item: NavigationItem) => {
    if (hasItems(item)) {
      return (
        <div key={item.name}>
          <div className={`text-sm font-semibold leading-6 px-3 py-2 ${
            pathname.startsWith(item.href) ? 'text-blue-600' : 'text-gray-900'
          }`}>
            {item.name}
          </div>
          <div className="ml-4">
            {item.items.map((subItem) => (
              <div key={subItem.name}>
                <Link
                  href={subItem.href}
                  className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 ${
                    pathname === subItem.href ? 'text-blue-600' : 'text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {subItem.name}
                </Link>
                {hasItems(subItem) && (
                  <div className="ml-4">
                    {subItem.items.map((subSubItem) => (
                      <Link
                        key={subSubItem.name}
                        href={subSubItem.href}
                        className={`block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 ${
                          pathname === subSubItem.href ? 'text-blue-600' : 'text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subSubItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <Link
        href={item.href}
        className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
          pathname === item.href ? 'text-blue-600' : 'text-gray-900 hover:bg-gray-50'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="bg-white relative z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href={`${basePath}/`} className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              src={`${basePath}/images/logo.png`}
              alt="Company Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
              loader={imageLoader}
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {mainNavigation.map((item) => (
            <React.Fragment key={item.name}>
              {renderNavigationItem(item)}
            </React.Fragment>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link 
            href="/contact" 
            className={`text-sm font-semibold leading-6 ${
              pathname === '/contact' ? 'text-blue-700' : 'text-blue-600 hover:text-blue-500'
            }`}
          >
            Get a Quote <span aria-hidden="true">→</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Your Company</span>
              <Image
                className="h-8 w-auto"
                src={`${basePath}/images/logo.png`}
                alt="Company Logo"
                width={120}
                height={32}
                loader={imageLoader}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {mainNavigation.map((item) => (
                  <React.Fragment key={item.name}>
                    {renderMobileNavigationItem(item)}
                  </React.Fragment>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className={`-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 ${
                    pathname === '/contact' ? 'text-blue-700' : 'text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}