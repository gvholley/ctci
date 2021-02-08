# One Away
# Write a function to check if a string is one edit or zero edits away

def one_edit_away(first, second)
  if (first.length == second.length)
    one_edit_replace(first, second)
  elsif (first.length + 1 == second.length)
    one_edit_insert(first, second)
  elsif (first.length - 1 == second.length)
    one_edit_insert(first, second)
  else
    return false
  end
end
