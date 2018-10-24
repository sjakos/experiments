def longest_word(sentence)
    sentence.split(/[^[[:word:]]]+/).max { |a, b| a.length <=> b.length } 
end

p longest_word(STDIN.gets)
