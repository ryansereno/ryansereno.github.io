# My Curated 𝑽im Command Collection

Date: August 30, 2022

<p align="center">
    <img src="./vim-logo/vim-logo-png-transparent.png" alt="vim-logo-png-transparent.png" width="100px" />
</p>

## **Recording and Repeating Commands**

- **Record a sequence**: `q n {command sequence} q`
- **Repeat a sequence**: `@ n`

## **Basic Text Modification**

- **Repeat last change**: `.`
- **Change inner word**: `ciw` *(then type new word)*
- **Increment number**: `Ctrl a`
- **Decrement number**: `Ctrl x`
- **Change case of character under cursor**: `~`

## **Navigation and Files**

- **Open file from a path name**: `gf`
- **Move to a character**: `f {character}`
- **Jump between matching HTML tags**: `%`

## **Windows and Splits**

- **Split window horizontally**: `:vs` or `:vsp {filename}`
- **Split window vertically**: `Ctrl w v` or `:vs {filename}`
- **Resize windows to be equal**: `Ctrl w =`
- **Move right between panes**: `Ctrl w l`
- **Move left between panes**: `Ctrl w h`
- **Toggle between panes**: `Ctrl w w`
- **Resize horizontally**: `:res {number}`
- **Resize vertically**: `:vertical resize {number}`

## **Editing and Surrounding Text**

- **Surround word with quotes or tags**: `c i w "" Esc p`
- **Delete surrounding single quotes (w/ vim-surround plugin)**: `d s '`
- **Change surrounding character (w/ vim-surround plugin)**: `c s {current} {new}`

## **Clipboard Operations**

- **Copy to system clipboard**: `"*y`
- **Paste from system clipboard**: `"*p`

## **Search and Replace**

- **Replace in current line**: `:s/{searchTerm}/{replacement}/g`
- **Replace in entire document**: `:%s/{searchTerm}/{replacement}/g`
- **Replace within a visually selected block**: `:s/{currentWord}/{newWord}/g`

## **File Browsing with Netrw**

- **Open netrw window**: `:Ex`
- **Horizontal split netrw**: `:Sex`
- **Vertical split netrw**: `:Vex`
- **Create a new directory in netrw**: `d`
- **Create a new file in netrw directory**: `%`
- **Open vertical split file preview**: `p (when file is highlighted)`

## **Folding (Collapsing) Code**

- **New fold**: `zfat`
- **Toggle an existing fold**: `za`
- **Open all folds in document**: `zR`
- **Close all folds in document**: `zM`

## **Marks and Jumps**

- **Set a mark**: `m {a-z}`
- **Jump to a mark**: `' {a-z}` or `` {a-z}`
- **Jump to the previous location**: `''`

## **Running Commands and Scripts**

- **Run current JS script in Node**: `:w !node %`
- **Search within files with `grep`like command**: `:Rg {searchTerm}`

## **Colorschemes**

- **Change colorscheme**: `:colo {colorscheme}`
- **Install a colorscheme**: *(copy colorscheme vim file into `~/.vim/colors`)*
- **Enable true colors in terminal**: `set termguicolors` *(in `.vimrc`)*

## **Emmet Commands**

- **Self-closing tags for React**: `customtag/` *(converts to `<customtag />`)*

## **Macros**

- **Record a macro**: `q {register} {commands} q`
- **Playback a macro**: `@ {register}`

## **Miscellaneous**

- **Check spelling**: `z=`
- **Select text inside surrounding character**: `v i {character}`
- **Yank (copy) text inside surrounding character**: `y i {character}`
- **Select a whole word**: `v i w`
- **Add line above current**: `O`
- **Add line below current**: `o`
- **Join line below with current line**: `J`
- **Set netrw to directory below cursor**: `gn`
- **Move cursor vertically by half window height**: `Ctrl + u` / `Ctrl + d`

