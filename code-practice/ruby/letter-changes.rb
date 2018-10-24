def letter_changes(str)
    str.downcase
        .chars
        .map {|a| a =~ /[[:alpha:]]/ ? (a.ord+1).chr : a}
        .join
        .tr('aeiou','AEIOU')
end

p letter_changes(STDIN.gets.chomp)
