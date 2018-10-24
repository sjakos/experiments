def factorial(number)
    if(number % 1 != 0 || number < 0)
        'Please provide a whole number'
    else
        number <=1 ? 1 : number * factorial(number-1)
    end
end

p factorial(STDIN.gets.chomp.to_i)
