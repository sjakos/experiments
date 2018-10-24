def binary_search(arr, target)
    left = 0
    right = arr.length-1
    while left <= right do
        mid = left + ((right-left)/2).floor
        if arr[mid] == target
            return mid
        end
        if arr[mid] < target
            left = mid + 1
        else
            right = mid - 1
        end
    end
    -1
end

p binary_search([9,10,11,12,24],STDIN.gets.chomp.to_i)
