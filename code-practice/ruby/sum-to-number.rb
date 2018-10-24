def sum_to_number(number)
    (1..number).reduce(&:+)
end

def sum_to_number_recursive(number)
    number <=1 ? 1 : number + sum_to_number(number-1)
end

p sum_to_number(STDIN.gets.chomp.to_i)
