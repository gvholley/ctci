# 1.2 Check Permutation:
# Given two strings, write a method to decide if one is a permutation
# of the other

def check_permutation (a, b)
  a_char_count = count_chars(a)
  b_char_count = count_chars(b)
  return false if a_char_count.to_a.size != b_char_count.to_a.size
  a_char_count.each do |key, value|
    return false if b_char_count[k] != value
  end
end
