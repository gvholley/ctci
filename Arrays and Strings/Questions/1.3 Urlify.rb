# 1.3 URLify
# Write a method to replace all spaces in a string with '%20'
# Example: "Mr John Smith -> Mr%20John%20Smith"

def urlify(string)
  string.strip.gsub(" ", "%20")
end
