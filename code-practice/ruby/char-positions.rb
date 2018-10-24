# check a string to determine if all alpha characters are surrounded by '+'
def char_positions(string)
    string.chars.each_index do |i|
        if string[i] =~ /[[:alpha:]]/
            return !(string[i - 1] != '+' || string[i + 1] != '+' || i == 0)
        end
    end
end
