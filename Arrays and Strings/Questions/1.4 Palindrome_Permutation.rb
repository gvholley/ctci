# 1.4 Palindrome permutation
# Write a function to check if it is a permuation of a palindrome.

def palindrome(str)
  odd_count = count_chars(str).map{|k,v| v}.select {|i| i.odd?}.size
  odd_count > 1 ? false : true
end

def count_chars(str)
  char_counts = Hash.new(0)
  str.chars.each do |char|
    char_counts[char]+=1
  end
  char_counts
end

example_input = "racecar" # true
p count_chars(example_input)
example_input_2 = "panama" # false
p count_chars(example_input_2)
