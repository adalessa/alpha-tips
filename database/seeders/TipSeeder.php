<?php

namespace Database\Seeders;

use App\Models\Tip;
use Illuminate\Database\Seeder;

class TipSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Tip::create([
            'title' => 'Telescope Fuzzy Finder Setup',
            'description' => 'Configure Telescope for lightning-fast file navigation with custom keybindings.',
            'code' => "require('telescope').setup({\n  defaults = {\n    mappings = {\n      i = {\n        ['<C-j>'] = 'move_selection_next',\n        ['<C-k>'] = 'move_selection_previous',\n      }\n    }\n  }\n})",
            'language' => 'lua',
            'featured' => true,
            'explanation' => 'This setup allows for efficient file navigation using Telescope.',
            'notes' => 'Ensure Telescope is installed before using this configuration.',
            'benefits' => ['Improved navigation', 'Custom keybindings'],
        ]);

        Tip::create([
            'title' => 'LSP Auto-completion Configuration',
            'description' => 'Set up nvim-cmp with LSP for intelligent code completion.',
            'code' => "require('cmp').setup({\n  sources = {\n    { name = 'nvim_lsp' },\n    { name = 'buffer' },\n    { name = 'path' }\n  }\n})",
            'language' => 'lua',
            'featured' => true,
            'explanation' => 'This configuration enhances code completion using LSP.',
            'notes' => 'Make sure nvim-cmp and LSP are properly configured.',
            'benefits' => ['Intelligent code completion', 'Multiple sources'],
        ]);

        Tip::create([
            'title' => 'Efficient Navigation Keymaps',
            'description' => 'Essential keymappings to navigate your code faster.',
            'code' => "vim.keymap.set('n', '<C-d>', '<C-d>zz')\nvim.keymap.set('n', '<C-u>', '<C-u>zz')\nvim.keymap.set('n', 'n', 'nzzzv')\nvim.keymap.set('n', 'N', 'Nzzzv')",
            'language' => 'lua',
            'featured' => false,
            'explanation' => 'These keymaps help in quick navigation within files.',
            'notes' => 'Customize keymaps as per your preference.',
            'benefits' => ['Faster navigation', 'Improved efficiency'],
        ]);

        Tip::create([
            'title' => 'Lazy Loading Plugins',
            'description' => 'Improve startup time by lazy loading your plugins.',
            'code' => "require('lazy').setup({\n  { 'nvim-treesitter/nvim-treesitter', lazy = true, event = 'BufRead' },\n  { 'hrsh7th/nvim-cmp', event = 'InsertEnter' }\n})",
            'language' => 'lua',
            'featured' => false,
            'explanation' => 'Lazy loading reduces startup time by loading plugins only when needed.',
            'notes' => 'Configure lazy loading for plugins that are not always required.',
            'benefits' => ['Reduced startup time', 'Efficient resource usage'],
        ]);

        Tip::create([
            'title' => 'Custom Statusline with Lualine',
            'description' => 'Create a beautiful and informative statusline.',
            'code' => "require('lualine').setup({\n  options = {\n    theme = 'tokyonight',\n    section_separators = { left = '', right = '' },\n    component_separators = { left = '', right = '' }\n  }\n})",
            'language' => 'lua',
            'featured' => false,
            'explanation' => 'Lualine provides a customizable statusline for better aesthetics and information.',
            'notes' => 'Choose a theme that matches your overall setup.',
            'benefits' => ['Enhanced aesthetics', 'Informative statusline'],
        ]);

        Tip::create([
            'title' => 'Automatic Formatting on Save',
            'description' => 'Format your code automatically when saving files.',
            'code' => "vim.cmd [[\n  augroup FormatAutogroup\n    autocmd!\n    autocmd BufWritePre * lua vim.lsp.buf.format()\n  augroup END\n]]",
            'language' => 'lua',
            'featured' => false,
            'explanation' => 'Automatically formats code on save to maintain code style consistency.',
            'notes' => 'Ensure your LSP supports formatting.',
            'benefits' => ['Consistent code style', 'Saves time'],
        ]);
    }
}
