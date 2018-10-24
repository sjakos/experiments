def caps_words(string)
    string.split(/[^[[:word:]]]+/).map(&:capitalize).join(' ')  
end

p caps_words(STDIN.gets)